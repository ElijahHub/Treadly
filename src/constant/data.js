import { detailsOptions, fetchData, productOptions } from "../utils/fetchData";
import { toast } from 'react-hot-toast'

export async function getData() {
  try {
    // Fetching the data and waiting for it to resolve
    let data = await fetchData(productOptions);

    let products = data.products;

    // Mapping through the products and transforming them into the desired format
    let productData = products.map(el => {
      return {
        id: el.id,
        name: el.name,
        brandName: el.brandName,
        color: el.colour,
        imageUrl: el.imageUrl,
        url: el.url,
        price: el.price.current.text,
      };
    });

    // Returning the final processed product data
    return productData;

  } catch (error) {
    toast.error(`Error fetching or processing data: ${error.message}`, {
      duration: 5000,
      position: "top-right",
    })
    return []; // Return an empty array or handle the error as needed
  }
}


export async function getProductDetails(id) {
  try {
    let data = await fetchData(detailsOptions(id))

    let details = {
      id: data.id,
      name: data.name,
      description: data.description,
      brand: {
        name: data.brand.name,
        description: data.brand.description,
      },
      images: data.media.images.slice(0, 3),
      info: {
        aboutMe: data.info.aboutMe,
        careInfo: data.info.careInfo,
      },
      productType: data.productType.name
    }

    return details
  } catch (error) {
    toast.error(`Error fetching or processing data: ${error.message}`, {
      duration: 5000,
      position: "top-right",
    })
    return []; // Return an empty array or handle the error as needed
  }
}

