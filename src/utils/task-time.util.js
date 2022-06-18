export function TaskTimeUtil() {
  function buildResponseFromTask(tasks, idTask) {
    return tasks.map((task) => {
      const { initiatedAt, endedAt, taskTimeId } = task
      const initiatedAtHolder = new Date(initiatedAt)
      const endedAtHolder = new Date(endedAt)

      initiatedAtHolder.setHours(initiatedAtHolder.getHours() - 3)
      endedAtHolder.setHours(endedAtHolder.getHours() - 3)

      const secondsBetween = (endedAtHolder - initiatedAtHolder) / 1000
      return {
        initiatedAt,
        endedAt,
        taskTimeId,
        difference: secondsBetween,
        idTask,
      }
    })
  }

  function calculateTimeDifference(times) {
    let totalTime = 0

    times.forEach(({ difference }) => {
      totalTime = totalTime + difference
    })

    return totalTime
  }

  return { buildResponseFromTask, calculateTimeDifference }
}
