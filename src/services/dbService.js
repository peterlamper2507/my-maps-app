import { db } from '../firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

/**
 * Service for handling Map data (Places, Companies, People)
 */
const dbService = {
  // Places
  async addPlace(placeData) {
    try {
      const docRef = await addDoc(collection(db, 'places'), {
        ...placeData,
        createdAt: new Date().toISOString()
      });
      return docRef.id;
    } catch (e) {
      console.error('Error adding place: ', e);
      throw e;
    }
  },

  async getPlaces() {
    const querySnapshot = await getDocs(collection(db, 'places'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // Companies
  async addCompany(companyData) {
    try {
      const docRef = await addDoc(collection(db, 'companies'), {
        ...companyData,
        createdAt: new Date().toISOString()
      });
      return docRef.id;
    } catch (e) {
      console.error('Error adding company: ', e);
      throw e;
    }
  },

  async getCompanies() {
    const querySnapshot = await getDocs(collection(db, 'companies'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // People
  async addPerson(personData) {
    try {
      const docRef = await addDoc(collection(db, 'people'), {
        ...personData,
        createdAt: new Date().toISOString()
      });
      return docRef.id;
    } catch (e) {
      console.error('Error adding person: ', e);
      throw e;
    }
  },

  async getPeople() {
    const querySnapshot = await getDocs(collection(db, 'people'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};

export default dbService;
