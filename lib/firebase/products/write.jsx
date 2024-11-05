import { db, storage } from "@/lib/firebase";
import { collection, deleteDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewProduct = async ({ data, featureImage, imageList }) => {
    if (!data?.title) {
        throw new Error("Title is required");
    }
    if (!featureImage) {
        throw new Error("Feature Image  is required");
    }
    const featureImageRef = ref(storage, `products/${featureImage?.name}`)
    await uploadBytes(featureImageRef,featureImage);
    const featureImageURL = await getDownloadURL(featureImageRef);
    let imageURLList = [];

    for (let i = 0; i < imageList?.length; i++) {
        const image = imageList[i];
        const imageRef = ref(storage, `products/${image?.name}`)
        await uploadBytes(imageRef, image);
        const url = await getDownloadURL(imageRef);
        imageURLList.push(url);
    }

    const newID=doc(collection(db,`ids`)).id;

    await setDoc(doc(db,`products/${newID}`),{
        ...data,
        featureImageURL:featureImageURL,
        imageList:imageURLList,
        id:newID,
        timestampCreate:Timestamp.now(),
    })

};

export const deleteProduct= async ({id})=>{
    if (!id) {
      throw new Error("ID is required")
    }
    await  deleteDoc(doc(db,`products/${id}`))
  }
  