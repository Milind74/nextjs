const baseUrl=process.env.NODE_ENV=== 'production' ? "" : "http://localhost:3000"
console.log(baseUrl);
export default baseUrl