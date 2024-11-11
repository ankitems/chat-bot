// MUI Imports
import ProductAddHeader from '@/views/apps/dashboard/new/ProductAddHeader'
import ProductInformation from '@/views/apps/dashboard/new/ProductInformation'
import Grid from '@mui/material/Grid'

const Page = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ProductInformation />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ProductAddHeader />
      </Grid>
    </Grid>
  )
}

export default Page
