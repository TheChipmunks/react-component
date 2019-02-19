# React Test Component

## Instructions

Please build a React component to display the information as depicted in the mockup below. The name of the file should be "test_component.js" and the default export should be the component you built called "TestComponent". In addition to the React component, you should also provide a CSS file named "style.css" that will apply the appropriate styling to the component to make it match the mockup. Once you have completed the task, please zip up the folder containing the react component or components (if you need multiple) and the CSS file. Thank you and good luck! 

## Mockup

![](https://github.com/TheChipmunks/react-component/blob/master/screenshot.png)

## Component Usage

The component will be used as follows. Please note the props that are passed into the component. Your component should expect the same data to be passed in, using the exact same prop names.

```
const income_groups = {
    '50' : {
      'group_population' : 13829,
      'home_owner_population' : 2865,
      'family_home_owner_population' : 1331,
      'nonfamily_home_owner_population' : 1534,
      'renter_population' : 10964,
      'family_renter_population' : 1588,
      'nonfamily_renter_population' : 9376,
      'market_size' : 9376
    },
    '75' : {
      'group_population' : 7710,
      'home_owner_population' : 1896,
      'family_home_owner_population' : 880,
      'nonfamily_home_owner_population' : 1016,
      'renter_population' : 5814,
      'family_renter_population' : 842,
      'nonfamily_renter_population' : 4972,
      'market_size' : 4972
    },
    '100' : {
      'group_population' : 4728,
      'home_owner_population' : 1475,
      'family_home_owner_population' : 685,
      'nonfamily_home_owner_population' : 790,
      'renter_population' : 3253,
      'family_renter_population' : 471,
      'nonfamily_renter_population' : 2782,
      'market_size' : 2782
    };

<TestComponent 
  segment_number = {2}
  segment_age_group = {'25-34'}
  segment_population = {32219}
  total_population = {120448}
  income_groups : {income_groups} />
```

## Styling

Please provide an external stylesheet with the styling required to make the component look like the mockup. The top-level component should have the following properties:

```
{
  width: 1322px;
  height: 562px;
  border: 1px solid #161C29;
  border-radius: 6px;
  background-color: #1A202E;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
}
```

All fonts should be converted to Helvetica, which is different than the mockup. For everything else, use whatever tools are available to get as close to the mockup as you can.
