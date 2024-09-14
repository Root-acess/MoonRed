import React from 'react';

interface SlideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlideBar: React.FC<SlideBarProps> = ({ isOpen }) => {
  const menuItems = [
    {
      label: 'New chat',
      icon: (
        <svg
          className="shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      ),
      href: '#',
    },
    {
      label: 'Conversations',
      icon: (
        <svg
          className="shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 1-.018.011.05.05 0 0 0-.01.059c.235.466.51.909.818 1.329a.05.05 0 0 0 .056.019 13.276 13.276 0 0 0 3.995-2.02c.011-.009.02-.023.021-.037.279-2.985-.29-6.008-2.879-8.107a.041.041 0 0 0-.021-.018Z" />
          <path d="M8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
        </svg>
      ),
      href: '#',
    },
    {
      label: 'Files',
      icon: (
        <svg
          className="shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 7v4h14V7" />
          <path d="M5 17v-2h10v2" />
        </svg>
      ),
      href: '#',
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 h-full flex flex-col justify-between">
        <div
          id="hs-application-sidebar"
          className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-track-neutral-700 dark:scrollbar-thumb-neutral-500"
          role="dialog"
          aria-label="Sidebar"
        >
          <nav className="flex flex-col h-full">
            <div className="flex items-center justify-between pt-1 px-4 ml-4">
              <h3 className="text-lg ml-9 font-bold">MoonRed</h3>
            </div>
            <ul className="space-y-1.5 p-4 flex-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-300 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    href={item.href}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
