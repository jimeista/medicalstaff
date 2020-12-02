import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//async fetchings
//--->
export const getFilteredMedicalStaff = createAsyncThunk(
  'medicalstaff/getFilteredMedicalStaff',
  async (params) => {
    let url = '/sc-healthcare/api/staff/accumulative-counts'
    const res = await axios.post(url, params.params)

    // console.log(res)
    return { data: res.data, isFilter: params.isFilter }
  }
)

export const getFunctionalBlocks = createAsyncThunk(
  'medicalstaff/getFunctionalBlocks',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=functional-blocks`
    const res = await axios.post(url, params.params)

    return { data: res.data['functional-blocks'], isFilter: params.isFilter }
  }
)

export const getMedicalCareForms = createAsyncThunk(
  'medicalstaff/getMedicalCareForms',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=medical-care-forms`
    const res = await axios.post(url, params.params)

    return { data: res.data['medical-care-forms'], isFilter: params.isFilter }
  }
)

export const getPositionMed = createAsyncThunk(
  'medicalstaff/getPositionMed',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=posts`
    const res = await axios.post(url, params.params)

    return { data: res.data.posts, isFilter: params.isFilter }
  }
)

export const getTypes = createAsyncThunk(
  'medicalstaff/getTypes',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=types`
    const res = await axios.post(url, params.params)

    return { data: res.data.types, isFilter: params.isFilter }
  }
)

export const getAgesGenders = createAsyncThunk(
  'medicalstaff/getAgeGenders',
  async (params) => {
    let url = `/sc-healthcare/api/staff/accumulative-counts?graph=ages-genders`
    const res = await axios.post(url, params.params)

    return { data: res.data['ages-genders'], isFilter: params.isFilter }
  }
)

export const getOrganisations = createAsyncThunk(
  'healthmodule/getOrganisations',
  async () => {
    let url = '/sc-healthcare/api/organisations?entity=staff'
    return await axios.get(url).then((res) => res.data)
  }
)

//<---

//redux state
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
    resetFiltered: (state, action) => {
      state.functional_blocks.filtered = undefined
      state.medical_care_forms.filtered = undefined
      state.position_med.filtered = undefined
      state.types.filtered = undefined
      state.ages_genders.filtered = undefined
    },
  },
  extraReducers: {
    //get functional-blocks graph
    [getFunctionalBlocks.pending]: (state, action) => {
      state.functional_blocks.status = 'loading'
    },
    [getFunctionalBlocks.fulfilled]: (state, action) => {
      state.functional_blocks.status = 'success'
      const { isFilter, data } = action.payload
      isFilter
        ? (state.functional_blocks.filtered = data)
        : (state.functional_blocks.data = data)
    },
    [getFunctionalBlocks.rejected]: (state, action) => {
      state.functional_blocks.status = 'failed'
      state.functional_blocks.error = action.payload
    },

    //get types graph
    [getTypes.pending]: (state, action) => {
      state.types.status = 'loading'
    },
    [getTypes.fulfilled]: (state, action) => {
      state.types.status = 'success'

      const { isFilter, data } = action.payload
      isFilter ? (state.types.filtered = data) : (state.types.data = data)
    },
    [getTypes.rejected]: (state, action) => {
      state.types.status = 'failed'
      state.types.error = action.payload
    },

    //get posts graph
    [getPositionMed.pending]: (state, action) => {
      state.position_med.status = 'loading'
    },
    [getPositionMed.fulfilled]: (state, action) => {
      state.position_med.status = 'success'
      const { isFilter, data } = action.payload
      isFilter
        ? (state.position_med.filtered = data)
        : (state.position_med.data = data)
    },
    [getPositionMed.rejected]: (state, action) => {
      state.position_med.status = 'failed'
      state.position_med.error = action.payload
    },

    //get ages-genders graph
    [getAgesGenders.pending]: (state, action) => {
      state.ages_genders.status = 'loading'
    },
    [getAgesGenders.fulfilled]: (state, action) => {
      state.ages_genders.status = 'success'
      const { isFilter, data } = action.payload
      isFilter
        ? (state.ages_genders.filtered = data)
        : (state.ages_genders.data = data)
    },
    [getAgesGenders.rejected]: (state, action) => {
      state.ages_genders.status = 'failed'
      state.ages_genders.error = action.payload
    },

    //get medical-care-forms graph
    [getMedicalCareForms.pending]: (state, action) => {
      state.medical_care_forms.status = 'loading'
    },
    [getMedicalCareForms.fulfilled]: (state, action) => {
      state.medical_care_forms.status = 'success'
      const { isFilter, data } = action.payload
      isFilter
        ? (state.medical_care_forms.filtered = data)
        : (state.medical_care_forms.data = data)
    },
    [getMedicalCareForms.rejected]: (state, action) => {
      state.medical_care_forms.status = 'failed'
      state.medical_care_forms.error = action.payload
    },

    //get organisations list
    [getOrganisations.fulfilled]: (state, action) => {
      state.organisations_ = action.payload
    },
  },
})

//actions
export const { setGender, resetFiltered } = medicalstaffSlice.actions

export default medicalstaffSlice.reducer
