# Camera Store React App
In this project I've created a simple camera store React app where users can filter and sort different cameras, add 
them to a cart, and see total cost.
## Organization of Components
- App: This is the highest level component. It contains the header and the FilteredList component.
- FilteredList: This is another high level component. It's main job is to handle the filtering and 
  sorting of the cameras. However, it also contains the Cart and DisplayList components.
- DisplayList: This is the component that is responsible for displaying each of the camera cards.
- Cart: This is the component representing the cart.
## Data Passing
- The App component contains the constant product list which is passed to FilteredList
- FilteredList maintains all state variables for the app. Its state contains the currently selected
brand, type, and sort to be used for filtering and sorting. The state also keeps track of the 
  quantities of each camera in the shopping cart, as well as the total price of the cart
- The information about what is in the cart, the cart price, and methods to update the cart are passed
to the Cart component from FilteredList via props.
- The data representing each camera as well as the methods to update the cart are passed to the DisplayList 
component via props.
## How Users Trigger State Changes
- When users change the filtering and sorting options, they are changing the state representing the 
values of these options stored in FilteredList.
- When users add to the cart or remove from the cart they are updating the stored state of the quantity 
of each camera in the cart, as well as the total price of the cart.