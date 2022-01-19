interface SharedData {
    title: string;
    text: string;
    url: string;
    files?: File[];
}

export const share = async (data: SharedData) => {
  if ('share' in navigator) {
    try {
      await navigator.share(data);
    } catch (error) {
      console.error(error);
    }

  }
}
