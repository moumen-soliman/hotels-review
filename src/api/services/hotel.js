import Api from '@/api';

export default {
  getAllHotels() {
    return Api().get(`/hotels`);
  },
  getSingleHotel(id) {
    return Api().get(`/hotelDetails/${id}`);
  }
};
