import React from 'react'
import Header from '../components/Headers/Header'
import useGlobalStyles from '../utils/globalStyles'
import {
  Box,
  Typography,
  Container,
  Grid,
  ButtonBase,
  useTheme
} from '@mui/material'

import { ReactComponent as DashboardIcon } from '../assets/svg/svg/dashboard.svg'
import { getUsers, getRiders, restaurants, getVendors } from '../apollo'
import { gql, useQuery } from '@apollo/client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { withTranslation } from 'react-i18next'

// const { t } = useTranslation();

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
ChartJS.defaults.color = '#000'

const GET_USERS = gql`
  ${getUsers}
`
const GET_RIDERS = gql`
  ${getRiders}
`
const GET_RESTAURANTS = gql`
  ${restaurants}
`
const GET_VENDORS = gql`
  ${getVendors}
`

const SuperAdminDashboard = props => {
  const { t } = props
  const theme = useTheme()
  console.log('superadmin props: ', props)
  const globalClasses = useGlobalStyles()
  const { loading: loadingVendors, data: vendors } = useQuery(GET_VENDORS)
  const { data: restaurants, loading: loadingRest } = useQuery(
    GET_RESTAURANTS,
    { fetchPolicy: 'network-only' }
  )
  const { data: riders, loading: loadingRiders } = useQuery(GET_RIDERS)
  const { data: users, loading: loadingUsers } = useQuery(GET_USERS, {
    variables: { page: 0 }
  })

  // Move the initialization of data inside the component
  const labels = [
    t('January'),
    t('February'),
    t('March'),
    t('April'),
    t('May'),
    t('June'),
    t('July')
  ]

  const data = {
    labels,
    datasets: [
      {
        label: t('Restaurants'),
        data: [1, 2, 3, 4, 5, 6, 7],
        borderColor: theme.palette.warning.dark,
        backgroundColor: theme.palette.warning.dark
      },
      {
        label: t('Vendors'),
        data: [8, 7, 6, 5, 4, 3, 2],
        borderColor: theme.palette.secondary.lightest,
        backgroundColor: theme.palette.secondary.lightest
      },
      {
        label: t('Riders'),
        data: [2, 4, 6, 8, 7, 4, 1],
        borderColor: 'black',
        backgroundColor: 'black'
      },
      {
        label: t('Users'),
        data: [9, 6, 4, 2, 3, 5, 7],
        borderColor: 'orange',
        backgroundColor: 'orange'
      }
    ]
  }
  const sty = {
    fontSize: 35,
    fontWeight: 'bold',
    color: theme.palette.secondary.lightest,
    textAlign: 'center'
  }
  return (
    <>
      <Header />
        <Container sx={{ ml: 5 }} fluid className={globalClasses.flex}>
          <Grid container mt={0} spacing={0} justifyContent="center">
            <Grid item md={9} >
              {/* Apply styling to reduce the size of the icon */}
              <DashboardIcon/>
            </Grid>
          </Grid>
        </Container>
    </>
  )
}

const BoxCard = ({ children }) => (
  <Box
    sx={{
      p: 2,
      borderRadius: 5,
      bgcolor: 'common.white',
      width: '80%',
      mb: 3
    }}>
    {children}
  </Box>
)

const imgStyle = { marginLeft: '40%' }

const headSty = { fontSize: 15, fontWeight: 'bold' }

export default withTranslation()(SuperAdminDashboard)
