cube(`Test1`, {
  sql: `SELECT * FROM public.test1`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },

    chan2N: {
      sql: `chan_2_n`,
      type: `number`,
      title: `Chan 2 N`
    },
    
    chan3N: {
      sql: `chan_3_n`,
      type: `number`,
      title: `Chan 3 N`
    },
    
    
    chan4N: {
      sql: `chan_4_n`,
      type: `number`,
      title: `Chan 4 N`
    },
    
    chan1N: {
      sql: `chan_1_n`,
      type: `number`,
      title: `Chan 1 N`
    },
    
    chan6N: {
      sql: `chan_6_n`,
      type: `number`,
      title: `Chan 6 N`
    },
    
    chan5N: {
      sql: `chan_5_n`,
      type: `number`,
      title: `Chan 5 N`
    }
  },
  
  dimensions: {
    timeS: {
      sql: `time_s`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
