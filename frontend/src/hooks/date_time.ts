
const useDateTime = () => {
    const now = new Date()
    const year = now.getFullYear().toString()

    const month = String(now.getMonth() + 1).padStart(2, '0');

    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');

    const minutes = String(now.getMinutes()).padStart(2, '0');

    const seconds = String(now.getSeconds()).padStart(2, '0');

    const dateTimeString = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    return dateTimeString
};

export default useDateTime