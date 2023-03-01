import './App.css'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { ScheduledData } from './utility/types'
import ClassRow from './components/ClassRow';

// test
const data: ScheduledData[] = [
  {
    id: 2,
    title: "1hour Strength Training",
    startedAt: 1651503600, // Epoch time
    instructor: {
      id: "a-unique-id-3",
      name: "Allen Wrench"
    }
  },
  {
    id: 1,
    title: "30min Dance Cardio",
    startedAt: 1651413600,
    instructor: {
      id: "a-unique-id-4",
      name: "Frida Hughs"
    }
  },
  {
    id: 3,
    title: "15min Yoga",
    startedAt: 1651417200,
    instructor: {
      id: "a-unique-id-2",
      name: "Kira McCarthy"
    }
  }
];

export default function App() {
  const [groupedClasses, updateGroups] = useState<any>({})

  /** @param ts is in seconds */
  const formatDate = (ts: number) => {
    const date = moment(ts * 1000)
    return date.format("LL")
  }

  useEffect(() => {
    
    const newGroupedClasses: any = {}
    for(let i = 0; i < data.length; i++) {
      console.log(data[i])
      const { startedAt } = data[i]
      const dateString = formatDate(startedAt)

      if(newGroupedClasses[dateString]) {
        newGroupedClasses[dateString].push(data[i])
      } else {
        newGroupedClasses[dateString] = [data[i]]
      }
    
      console.log(newGroupedClasses)
      updateGroups(newGroupedClasses)
    }
  }, [])

  const datesWithClasses = Object.keys(groupedClasses)
  console.log('dates---', datesWithClasses)


  return <div className='classes-container'>
    {datesWithClasses.map((dateString) => {
      const classes = groupedClasses[dateString]

      return <ClassRow classes={classes} dateString={dateString} />
    })}
  </div>
}
