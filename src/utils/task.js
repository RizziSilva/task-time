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
      const { taskId: taskIdToFilter, title, description, link } = task
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
          times: times,
        })
      }
    })

    return response
  }

  return { separeteTasksAndCalculateTime }
}
