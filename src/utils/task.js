export function TaskUtil() {
  function buildResponseFromTask(tasks) {
    return tasks.map((task) => {
      const { initiatedAt, endedAt, taskTimeId } = task
      const secondsBetween = (endedAt - initiatedAt) / 1000

      return { initiatedAt, endedAt, taskTimeId, difference: secondsBetween }
    })
  }

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
        const times = buildResponseFromTask(allTaskTaskTimes)

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
      let totalTime = 0

      response.times.forEach(({ difference }) => {
        totalTime = totalTime + difference
      })

      response.totalTime = totalTime
    })

    return response
  }

  function getDateAsString(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  function getDayToRequestParameter(day) {
    const today = new Date()
    const requestDay = new Date(day)
    return day ? getDateAsString(requestDay) : getDateAsString(today)
  }

  return { separeteTasksAndCalculateTime, getDayToRequestParameter }
}
