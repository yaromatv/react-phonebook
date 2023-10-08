import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

// const api = createApi({
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://example.com',
//   }),
//   endpoints(build) {
//     return {
//       query: build.query({ query: () => ({ url: '/query', method: 'get' }) }),
//       mutation: build.mutation({
//         query: () => ({ url: '/mutation', method: 'post' }),
//       }),
//     };
//   },
// });

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        data: { name, number },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(5),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
//     restoreContacts(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, restoreContacts } =
//   contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
