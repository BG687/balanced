
import { useEffect, useState } from 'react'
import { ScheduledData } from '../utility/types'


export default function ClassRow({ classes, dateString }: { classes: ScheduledData[], dateString: string }) {
  console.log('in class row', classes)
  


  return <div className='class-row'>
    <div className='group-title'>{dateString}</div>
    <div className='class-list'>
        {
            classes.map((classData) => {
                return (
                <div className='class-box'>
                    <h5 className='class-title'>{classData?.title}</h5>
                    <p className='class-subtitle'>{classData?.instructor?.name}</p>
                </div>
                )
            })
        }
    </div>
  </div>
}
