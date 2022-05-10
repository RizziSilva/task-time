export function Pagination() {
  function getOffSet(page, limit) {
    const pageToUse = page - 1
    const offSet = pageToUse * limit

    return offSet.toString()
  }

  function buildResponseWithPaginationInfo(
    response,
    page,
    limit,
    quantityOfItems,
  ) {
    const integerPage = parseInt(page)
    const numberOfElementsReturned = integerPage * limit
    const hasMoreElements = quantityOfItems > numberOfElementsReturned
    const quantityOfReturneditems = response.length

    return {
      page: integerPage,
      lastPage: !hasMoreElements,
      limit: limit,
      quantityOfItems: quantityOfReturneditems,
      result: response,
    }
  }

  return { getOffSet, buildResponseWithPaginationInfo }
}
