import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  {
    id: 0,
    name: 'First Three Channels first 10 values',
    vizState: {
      query: {
        dimensions: ['Test1.time'],
        limit: 10,
        measures: ['Test1.chanone', 'Test1.chantwo', 'Test1.chanthree'],
        order: [['Test1.time', 'asc']],
        filters: [
          {
            member: 'Test1.time',
            operator: 'gte',
            values: ['6.45'],
          },
        ],
      },
      chartType: 'table',
    },
  },
  {
    id: 1,
    name: 'Channel one (N) vs Time (s)',
    vizState: {
      query: {
        dimensions: ['Test1.time'],
        limit: 500,
        measures: ['Test1.chanone'],
        order: [['Test1.time', 'asc']],
        filters: [
          {
            member: 'Test1.time',
            operator: 'gte',
            values: ['6.45'],
          },
        ],
      },
      chartType: 'area',
    },
  },
  {
    id: 2,
    name: 'Channel two (N) vs Time (s)',
    vizState: {
      query: {
        dimensions: ['Test1.time'],
        limit: 500,
        filters: [
          {
            member: 'Test1.time',
            operator: 'gte',
            values: ['6.45'],
          },
        ],
        measures: ['Test1.chantwo'],
        order: [['Test1.time', 'asc']],
      },
      chartType: 'area',
    },
  },
  {
    id: 3,
    name: 'Channel Three (N) vs Time (s)',
    vizState: {
      query: {
        dimensions: ['Test1.time'],
        limit: 500,
        filters: [
          {
            member: 'Test1.time',
            operator: 'gte',
            values: ['6.45'],
          },
        ],
        measures: ['Test1.chanthree'],
        order: [['Test1.time', 'asc']],
      },
      chartType: 'area',
    },
  },
  {
    id: 4,
    name: 'Channel One (N) and Channel Two (N) vs Time (s)',
    vizState: {
      query: {
        dimensions: ['Test1.time'],
        limit: 500,
        filters: [
          {
            member: 'Test1.time',
            operator: 'gte',
            values: ['6.45'],
          },
        ],
        measures: ['Test1.chanone', 'Test1.chantwo'],
        order: [['Test1.time', 'asc']],
      },
      chartType: 'line',
    },
  },
];
const DashboardPage = () => {
  const dashboardItem = (item) => (
    <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>
  );
  const Empty = () => (
    <div
      style={{
        textAlign: 'center',
        padding: 12,
      }}
    >
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>
  );
  return DashboardItems.length ? (
    <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard>
  ) : (
    <Empty />
  );
};
export default DashboardPage;
