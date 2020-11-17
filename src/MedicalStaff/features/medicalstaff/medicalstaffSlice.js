import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMedicalStaff = createAsyncThunk(
  'medicalstaff/getMedicalStaff',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=${params.graph}`
    const res = await axios.post(url, params)

    // console.log(res)
    return { data: res.data, graph: params.graph }
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

export const getFunctionalBlocks = createAsyncThunk(
  'medicalstaff/getFunctionalBlocks',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=functional-blocks`
    const res = await axios.post(url, params)

    return res.data['functional-blocks']
  }
)

export const getMedicalCareForms = createAsyncThunk(
  'medicalstaff/getMedicalCareForms',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=medical-care-forms`
    const res = await axios.post(url, params)

    return res.data['medical-care-forms']
  }
)

export const getPositionMed = createAsyncThunk(
  'medicalstaff/getPositionMed',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=posts`
    const res = await axios.post(url, params)

    return res.data.posts
  }
)

export const getTypes = createAsyncThunk(
  'medicalstaff/getTypes',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=types`
    const res = await axios.post(url, params)

    return res.data.types
  }
)

export const getAgesGenders = createAsyncThunk(
  'medicalstaff/getAgeGenders',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=ages-genders`
    const res = await axios.post(url, params)

    return res.data['ages-genders']
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

    functional_blocks: {
      status: 'idle',
      data: [],
      error: [],
    },

    medical_care_forms: {
      status: 'idle',
      data: [],
      error: [],
    },

    position_med: {
      status: 'idle',
      data: [],
      error: [],
    },

    types: {
      status: 'idle',
      data: [],
      error: [],
    },

    ages_genders: {
      status: 'idle',
      data: [],
      error: [],
    },

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
    //async fetching functional-blocks graph
    [getFunctionalBlocks.pending]: (state, action) => {
      console.log(action.payload)
      state.functional_blocks.status = 'loading'
    },
    [getFunctionalBlocks.fulfilled]: (state, action) => {
      state.functional_blocks.status = 'success'
      state.functional_blocks.data = action.payload
    },
    [getFunctionalBlocks.failed]: (state, action) => {
      state.functional_blocks.status = 'failed'
      state.functional_blocks.error = action.payload
    },

    //async fetching types graph
    [getTypes.pending]: (state, action) => {
      console.log(action.payload)
      state['types'].status = 'loading'
    },
    [getTypes.fulfilled]: (state, action) => {
      state['types'].status = 'success'
      state['types'].data = action.payload
    },
    [getTypes.failed]: (state, action) => {
      state['types'].status = 'failed'
      state['types'].error = action.payload
    },

    //async fetching posts graph
    [getPositionMed.pending]: (state, action) => {
      console.log(action.payload)
      state['position_med'].status = 'loading'
    },
    [getPositionMed.fulfilled]: (state, action) => {
      state['position_med'].status = 'success'
      state['position_med'].data = action.payload
    },
    [getPositionMed.failed]: (state, action) => {
      state['position_med'].status = 'failed'
      state['position_med'].error = action.payload
    },

    //async fetching ages-genders graph
    [getAgesGenders.pending]: (state, action) => {
      console.log(action.payload)
      state['ages_genders'].status = 'loading'
    },
    [getAgesGenders.fulfilled]: (state, action) => {
      state['ages_genders'].status = 'success'
      state['ages_genders'].data = action.payload
    },
    [getAgesGenders.failed]: (state, action) => {
      state['ages_genders'].status = 'failed'
      state['ages_genders'].error = action.payload
    },

    //async fetching medical-care-forms graph
    [getMedicalCareForms.pending]: (state, action) => {
      console.log(action.payload)
      state.medical_care_forms.status = 'loading'
    },
    [getMedicalCareForms.fulfilled]: (state, action) => {
      state.medical_care_forms.status = 'success'
      state.medical_care_forms.data = action.payload
    },
    [getMedicalCareForms.failed]: (state, action) => {
      state.medical_care_forms.status = 'failed'
      state.medical_care_forms.error = action.payload
    },

    ///old
    // [getMedicalStaff.pending]: (state, action) => {
    //   state.status = 'loading'
    // },
    // [getMedicalStaff.fulfilled]: (state, action) => {
    //   state.status = 'success'
    //   state.data = action.payload
    // },
    // [getMedicalStaff.failed]: (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.payload
    // },
    // [getFilteredMedicalStaff.pending]: (state, action) => {
    //   state.status = 'loading'
    // },
    // [getFilteredMedicalStaff.fulfilled]: (state, action) => {
    //   state.status = 'success'
    //   state.filtered_data = action.payload
    // },
    // [getFilteredMedicalStaff.failed]: (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.payload
    // },
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
