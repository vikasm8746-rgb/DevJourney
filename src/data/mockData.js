const today=new Date(); const day=n=>new Date(today.getTime()-n*86400000).toISOString().slice(0,10);
export const demoActivities=[
{id:'a1',technology:'JavaScript',date:day(0),hours:2,notes:'Practiced ES6 and array methods',difficulty:'Medium'},
{id:'a2',technology:'React',date:day(1),hours:1.5,notes:'Built reusable components',difficulty:'Medium'},
{id:'a3',technology:'JavaScript',date:day(2),hours:2,notes:'Worked with async functions',difficulty:'Hard'},
{id:'a4',technology:'HTML',date:day(4),hours:1,notes:'Semantic HTML practice',difficulty:'Easy'}
];
export const demoGoals=[
{id:'g1',title:'Master React Fundamentals',description:'Complete components, hooks and state management.',technology:'React',deadline:new Date(today.getTime()+14*86400000).toISOString().slice(0,10),priority:'High',progress:65,completed:false},
{id:'g2',title:'Build Portfolio Project',description:'Create and publish one polished project.',technology:'Web Development',deadline:new Date(today.getTime()+30*86400000).toISOString().slice(0,10),priority:'Medium',progress:30,completed:false}
];