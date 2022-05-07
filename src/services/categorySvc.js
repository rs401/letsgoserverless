
import { listCategories } from "../graphql/queries";
import { createCategory } from "../graphql/mutations";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export async function getCategories() {
  try {
    const catsData = await API.graphql(graphqlOperation(listCategories));
    const items = catsData.data.listCategories.items;
    return items;
  } catch (err) {
    console.log('error fetching categories.', err);
  }
}

export async function addCategory(cat) {
  try {
    return await API.graphql(graphqlOperation(createCategory, {input: cat }));
  } catch (err) {
    console.log('error fetching categories.', err);
  }
}

export function getStates() {
  return ["AL","AK","AZ","AR","AS","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","CM","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","TT","UT","VT","VA","VI","WA","WV","WI","WY"];
}