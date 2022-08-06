import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['contacts', 'auth'],

  endpoints: builder => ({
    getCurrentUser: builder.mutation({
      query: () => ({
        url: 'users/current',
      }),
      invalidatesTags: ['auth'],
    }),

    signUp: builder.mutation({
      query: contactContent => ({
        url: 'users/signup',
        method: 'POST',
        body: contactContent,
      }),
      invalidatesTags: ['auth'],
    }),

    logIn: builder.mutation({
      query: contactContent => ({
        url: 'users/login',
        method: 'POST',
        body: contactContent,
      }),
      invalidatesTags: ['auth'],
    }),

    logOut: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),

    fetchContacts: builder.query({
      query: () => 'contacts',
      keepUnusedDataFor: 3,
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          phone: newContact.phone,
        },
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetCurrentUserMutation,
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
