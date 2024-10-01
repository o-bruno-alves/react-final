import { useEffect, useState } from "react";

type ContactType = {
    email:string[],
    phones:string[],
    address:string[]
  }

const useFetch = (url:string) => {
    const [contactInfo, setContactInfo] = useState<ContactType>()
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => (setContactInfo(info)));
  }, []);
  return contactInfo
}
export default useFetch