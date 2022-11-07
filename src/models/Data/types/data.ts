// in the state
export interface ItemSchema {
    data?: Item,
    isLoading: boolean,
    error?: string,
    selectVal: string,
}

export interface Item {
    id?: string;
    title?: string;
    image?: string;
    subtitle?: string;
    brand?: string;
    reviews?: Review[];
    retailer?: string;
    details?: string[];
    tags?: string[];
    sales?: SaleInfo[];
}

interface Review {
    customer: string;
    review: string;
    score: number;
}

interface SaleInfo {
    weekEnding: string | number;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}


export interface GraphValue {
    value?: string;
}

