cube(`Test1`, {
  sql: `SELECT * FROM public.test1`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
    main: {
      measures: [Test1.count, Test1.chantwo, Test1.chanthree, Test1.chanfour, Test1.chanone, Test1.chansix, Test1.chanfive],
      dimensions: [Test1.time]
    } 
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },

    chantwo: {
      sql: `chan_2_n`,
      type: `number`,
      title: `Chan 2 N`
    },
    
    chanthree: {
      sql: `chan_3_n`,
      type: `number`,
      title: `Chan 3 N`
    },
    
    
    chanfour: {
      sql: `chan_4_n`,
      type: `number`,
      title: `Chan 4 N`
    },
    
    chanone: {
      sql: `chan_1_n`,
      type: `number`,
      title: `Chan 1 N`
    },
    
    chansix: {
      sql: `chan_6_n`,
      type: `number`,
      title: `Chan 6 N`
    },
    
    chanfive: {
      sql: `chan_5_n`,
      type: `number`,
      title: `Chan 5 N`
    }
  },
  
  dimensions: {
    time: {
      sql: `time_s`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
