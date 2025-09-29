const Loader = ({ size = 'default', fullScreen = false, text = '' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    default: 'w-12 h-12 border-4',
    large: 'w-16 h-16 border-4',
  };

  const loaderElement = (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-blue-600 border-t-transparent rounded-full animate-spin`}
      ></div>
      {text && <p className="mt-4 text-gray-600 text-sm font-medium">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50">
        {loaderElement}
      </div>
    );
  }

  return loaderElement;
};

export default Loader;