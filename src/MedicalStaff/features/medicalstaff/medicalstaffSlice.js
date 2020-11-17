import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMedicalStaff = createAsyncThunk(
  'medicalstaff/getMedicalStaff',
  async (params) => {
    let url = '/sc-healthcare/api/staff/accumulative-counts'
    const res = await axios.post(url, params)

    // console.log(res)
    return res.data
  }
)

export const getFilteredMedicalStaff = createAsyncThunk(
  'medicalstaff/getFilteredMedicalStaff',
  async (params) => {
    let url = '/sc-healthcare/api/staff/accumulative-counts'
    const res = await axios.post(url, params)

    // console.log(res)
    return res.data
  }
)

export const getOrganisations = createAsyncThunk(
  'healthmodule/getOrganisations',
  async () => {
    let url = '/sc-healthcare/api/organisations?entity=staff'
    return await axios.get(url).then((res) => res.data)
  }
)

const medicalstaffSlice = createSlice({
  name: 'medicalstaff',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    organisations_: [],
    gender: { Мужчины: 'Мужчины', Женщины: 'Женщины' },
  },
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload
    },
    setFilteredData: (state, action) => {
      state.filtered_data = action.payload
    },
    resetMedicalStaff: (state) => {
      state.data = []
      state.status = 'idle'
    },
    resetFilteredMedicalStaff: (state) => {
      state.gender = { Мужчины: 'Мужчины', Женщины: 'Женщины' }
      state.filtered_data = undefined
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
    [getOrganisations.fulfilled]: (state, action) => {
      state.organisations_ = action.payload
    },
  },
})

export const {
  setFilteredData,
  setGender,
  resetMedicalStaff,
  resetFilteredMedicalStaff,
} = medicalstaffSlice.actions

export default medicalstaffSlice.reducer
