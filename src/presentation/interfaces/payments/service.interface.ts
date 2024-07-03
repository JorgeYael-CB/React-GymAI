export interface ServiceInterface {

  id?: string,
  active?: boolean,
  created?: number,
  currency?: 'usd' | 'mxn',
  product?: string,
  unit_amount?: number,
  unit_amount_decimal?: number,

}