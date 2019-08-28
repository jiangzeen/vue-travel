let defaultCity = '赣州'
// 兼容
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
export default {
  city: defaultCity
}
