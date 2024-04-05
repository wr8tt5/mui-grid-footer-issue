import React from 'react'
import FullFeaturedCrudGrid from './GridDemo'
import { Box, Tab, Tabs } from '@mui/material'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{height: '100%'}}
            {...other}
        >
            {value === index && (
              <div style={{ height: '100%' }}>
                {children}
              </div>
            )}
        </div>
    );
}

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setTabValue(newValue);
  };

  return (
      <div style={{height: '100vh'}}>
          <div style={{height: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={tabValue} onChange={handleChange}>
                      <Tab label="mytab1"/>
                  </Tabs>
              </Box>
              <CustomTabPanel value={ tabValue } index={ 0 }>
                  <FullFeaturedCrudGrid/>
              </CustomTabPanel>
          </div>
      </div>
  );
}

export default App;
