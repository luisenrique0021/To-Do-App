

export const ErrorAlert = ({children}) => {
  return (
    <div className="bg-red-600 text-center text-white rounded-md mb-5 p-4 font-bold">{children}</div>
  )
}

export default ErrorAlert;
