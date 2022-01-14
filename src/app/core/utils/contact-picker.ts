export type ContactProperties = 'name' | 'icon' | 'email' | 'address' | 'tel';

export interface ContactOptions {
  properties?: ContactProperties[];
  multiple?: boolean;
}

export interface Contact {
  name?: string;
  icon?: string;
  email?: string;
  address?: string;
  tel?: string;
}

export const getAvailableContactProperties = async (): Promise<ContactProperties[]> => {
  // @ts-ignore
  return await navigator.contacts.getProperties();
}

export const getContacts = async (options: ContactOptions = {multiple: true}): Promise<Contact | Contact[]> => {
  try {
    if ('contacts' in navigator) {
      // @ts-ignore
      return await navigator.contacts.select(properties, options);
    } else {
      throw new Error('Contacts API not available');
    }
  } catch (error: unknown) {
    // Handle any errors here.
    throw new Error(error as string);
  }
}
