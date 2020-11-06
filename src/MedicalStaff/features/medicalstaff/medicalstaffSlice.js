import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMedicalStaff = createAsyncThunk(
  'medicalstaff/getMedicalStaff',
  async (params) => {
    let url = '/sc-healthcare/api/staff'
    const res = await axios.post(url, params)

    // console.log(res)
    return res.data
  }
)

export const getFilteredMedicalStaff = createAsyncThunk(
  'medicalstaff/getFilteredMedicalStaff',
  async (params) => {
    let url = '/sc-healthcare/api/staff'
    const res = await axios.post(url, params)

    // console.log(res)
    return res.data
  }
)

// export const getOrganisations = createAsyncThunk(
//   'medicalstaff/getOrganisations',
//   async () => {
//     let url = '/sc-healthcare/api/organisations?entity=staff'
//     const res = await axios.get(url)

//     // console.log(res)
//     return res.data
//   }
// )

const medicalstaffSlice = createSlice({
  name: 'medicalstaff',
  initialState: {
    data: [],
    filtered_data: [],
    status: 'idle',
    error: null,
    // organisations: {
    //   data: [],
    //   status: 'idle',
    //   error: '',
    // },
    params: {},
  },
  reducers: {
    setFilteredData: (state, action) => {
      state.filtered_data = action.payload
    },
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload }
    },
    resetParams: (state, action) => {
      let key = action.payload
      if (key) {
        delete state.params[key]
      } else {
        state.params = {}
      }
    },
    // resetOrganisations: (state) => {
    //   state.organisations.data = []
    //   state.organisations.status = 'idle'
    // },
    resetMedicalStaff: (state) => {
      state.data = []
      state.status = 'idle'
    },
    resetFilteredMedicalStaff: (state) => {
      state.filtered_data = []
    },
  },
  extraReducers: {
    [getMedicalStaff.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getMedicalStaff.fulfilled]: (state, action) => {
      state.status = 'success'
      state.data = action.payload
    },
    [getMedicalStaff.failed]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    [getFilteredMedicalStaff.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getFilteredMedicalStaff.fulfilled]: (state, action) => {
      state.status = 'success'
      state.filtered_data = action.payload
    },
    [getFilteredMedicalStaff.failed]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    // [getOrganisations.pending]: (state, action) => {
    //   state.organisations.status = 'loading'
    // },
    // [getOrganisations.fulfilled]: (state, action) => {
    //   state.organisations.status = 'success'
    //   state.organisations.data = action.payload
    // },
    // [getOrganisations.failed]: (state, action) => {
    //   state.organisations.status = 'failed'
    //   state.organisations.error = action.payload
    // },
  },
})

export const {
  setParams,
  resetParams,
  // resetOrganisations,
  resetMedicalStaff,
  setFilteredData,
  resetFilteredMedicalStaff,
} = medicalstaffSlice.actions

export default medicalstaffSlice.reducer
