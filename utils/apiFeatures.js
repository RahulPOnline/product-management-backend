const applyAPIFeatures = (query, queryString) => {
  
  // PAGINATION
  const page = Number(queryString.page) || 1;
  const limit = Number(queryString.limit) || 10;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  return query;
};

module.exports = applyAPIFeatures;