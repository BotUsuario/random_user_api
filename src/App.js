import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';
import { useState, useEffect } from "react";
import useFetch from 'react-fetch-hook';

function App() {
  const url='https://randomuser.me/api'
    const { isLoading, data, error } = useFetch(url + '?results=200')

    data && console.log(data)
    
    const [contactList, setContactList] = useState()
    const [filterQuery, setFilterQuery] = useState()

    useEffect(() => {
     if(filterQuery) {
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.results?.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last}`

        if(queryString.length === 1){
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        } else {
          return fullName.toLowerCase().includes(queryString)
        }
      })
      setContactList(filteredData)
     } else {
        setContactList(data?.results)
     }
    }, [data, filterQuery])

  return (
    <div className='bg-[#10213c]'>
      <section>
        <form>
          <input 
          type='text'
          onChange={(e) => setFilterQuery(e.target.value)}
          className='ml-20 mt-6 rounded-md p-2'
          placeholder='Filter Users..' 
          />
        </form>
      </section>
      <h1 className='text-center lg:text-7xl text-5xl pt-3 text-white'>Random Users</h1>
      <section className='p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {contactList?.length < 1 && (
          <h1 className='text-2xl text-red-600'>No data matches your search</h1>
        )}
        <ContactCard contactList={contactList} />
      </section>
    </div>
  );
}

export default App;
