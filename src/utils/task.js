import { TaskTimeUtil } from './task-time.util'

export function TaskUtil() {
  const { buildResponseFromTask, calculateTimeDifference } = TaskTimeUtil()

  function separeteTasksAndCalculateTime(tasks) {
    const response = []
    tasks.forEach((task) => {
      const {
        taskId: taskIdToFilter,
        title,
        description,
        link,
        createdAt,
      } = task
      const alreadyHasBuildThisResponse = response.some(
        (response) => response.taskId === taskIdToFilter,
      )
      if (!alreadyHasBuildThisResponse) {
        const allTaskTaskTimes = tasks.filter(
          ({ taskId }) => taskId === taskIdToFilter,
        )
        const times = buildResponseFromTask(allTaskTaskTimes, taskIdToFilter)

        response.push({
          taskId: taskIdToFilter,
          title,
          description,
          link,
          createdAt,
          times: times,
        })
      }
    })

    response.forEach((response) => {
      const totalTime = calculateTimeDifference(response.times)

      response.totalTime = totalTime
    })

    return response
  }

  function getDateAsString(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  function getDayToRequestParameter(day) {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    const requestDay = new Date(day)
    return day ? getDateAsString(requestDay) : getDateAsString(tomorrow)
  }

  return {
    separeteTasksAndCalculateTime,
    getDayToRequestParameter,
  }
}
