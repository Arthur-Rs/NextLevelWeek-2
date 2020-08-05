import { Request, Response } from 'express'
import db from '../database/connection'
import ConvertHourToMinutes from '../utils/convert_hour_to_minutes'

interface IscheduleItem {
  week_day: number,
  from: string,
  to: string
}

interface IQuery {
  week_day: number,
  subject: string,
  time: string
}

class ClassesController {
  async index(req: Request, res: Response) {

    const { week_day, subject, time } = req.query as unknown as IQuery

    if (!week_day || !subject || !time) {
      return res.status(400).json({ message: 'Bad Request!' })
    }

    const convetedTime = ConvertHourToMinutes(time)

    const data = await db('classes')
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .join('class_schedule', 'class_schedule.class_id', '=', 'classes.id')
      .where('class_schedule.week_day', '=', week_day)
      .where('class_schedule.from', '<=', convetedTime)
      .where('class_schedule.to', '>', convetedTime)




    return res.status(201).json(data)

  }

  async store(req: Request, res: Response) {
    const {
      name,
      avatar,
      bio,
      whatsapp,
      subject,
      cost,
      schedule
    } = req.body

    const trx = await db.transaction()

    try {
      const [user_id] = await trx('users').insert({
        name,
        avatar,
        bio,
        whatsapp,
      })

      const [class_id] = await trx('classes').insert({
        user_id,
        subject,
        cost,
      })

      const classesSchedule = schedule.map((item: IscheduleItem) => ({
        class_id,
        week_day: item.week_day,
        from: ConvertHourToMinutes(item.from),
        to: ConvertHourToMinutes(item.to)
      }))

      await trx('class_schedule').insert(classesSchedule)

      trx.commit()

      return res.status(201).json({ message: 'success' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Internal Server Error!' })
    }
  }
}

export default new ClassesController()