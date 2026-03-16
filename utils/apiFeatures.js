const applyAPIFeatures = (query, queryString) => {

  
  // PAGINATION
  const page = Math.max(Number(queryString.page) || 1, 1);
  const limit = Math.max(Number(queryString.limit) || 10, 1);
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  return query;
};

module.exports = applyAPIFeatures;