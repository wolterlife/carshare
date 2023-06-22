import {createSlice} from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'toolkit',
  initialState: {
    accounts: [{ email: 'admin', password: 'admin', number: '+375338484844', admin: true }],
    isAuth: false,
    allReview: [
      {
        carId: 1,
        msg: 'Машинка супер, ни одной царапинки',
        mail: 'somemail@gmail.com',
      }
    ],
    selectedReview: {},
    currentAccount: {},
    payment: {},
    orders: [],
    cars: [
      {
        id: 1,
        img: '/img/vw.png',
        model: 'VOLKSWAGEN POLO',
        type: 'Эконом',
        coords: { lat: 55.18, lng: 30.223 },
      },
      {
        id: 2,
        img: '/img/ty_camri.png',
        model: 'TOYOTA CAMRY',
        type: 'Эконом',
        coords: { lat: 55.16, lng: 30.227 },
      },
      {
        id: 3,
        img: '/img/lifan.png',
        model: 'LIFAN SOLANO II',
        type: 'Премиум',
        coords: { lat: 55.172, lng: 30.270 },
      },
      {
        id: 4,
        img: '/img/hend-acc.png',
        model: 'HONDA ACCORD',
        type: 'Бизнес',
        coords: { lat: 55.175, lng: 30.250 },
      },
      {
        id: 6,
        img: '/img/almera.png',
        model: 'NISSAN ALMERA',
        type: 'Премиум',
        coords: { lat: 55.195, lng: 30.240 },
      },
      {
        id: 7,
        img: '/img/vw.png',
        model: 'VOLKSWAGEN POLO',
        type: 'Эконом',
        coords: { lat: 55.194, lng: 30.230 },
      },
      {
        id: 8,
        img: '/img/hend-acc.png',
        model: 'HONDA ACCORD',
        type: 'Бизнес',
        coords: { lat: 55.184, lng: 30.230 },
      },
      {
        id: 9,
        img: '/img/lada-vesta.png',
        model: 'LADA VESTA CROSS',
        type: 'Эконом',
        coords: { lat: 55.183, lng: 30.205 },
      },
    ],
  },
  reducers: {
    addAccount(state, action) {
      state.accounts.push(action.payload);
      state.isAuth = true;
      state.currentAccount = action.payload
      state.payment = {};
    },
    exitAccount(state) {
      state.isAuth = false;
      state.payment = {};
      state.currentAccount = {};
      state.selectedReview = {};
    },
    entryAcc(state, action) {
      state.isAuth = true;
      state.currentAccount = action.payload
    },
    savePayment(state, action) {
      state.payment = action.payload;
    },
    createOrder(state, action) {
      state.orders.push(action.payload)
    },
    addCar(state, action) {
      state.cars.push(action.payload);
    },
    dellCar(state, action) {
      state.cars = state.cars.filter(item => item.id !== action.payload)
    },
    selectForReview(state, action) {
      state.selectedReview = action.payload;
    },
    addReview(state, action) {
      state.allReview.push(action.payload)
    }
  }
})

export default registrationSlice.reducer
export const {
  addReview,
  addCar,
  dellCar,
  createOrder,
  addAccount,
  savePayment,
  exitAccount,
  entryAcc,
  selectForReview,
} = registrationSlice.actions;
