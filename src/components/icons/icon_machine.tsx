interface IconProps extends React.SVGAttributes<SVGElement>{}

export default function IconMachine(props: IconProps) {

    return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                {...props}
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    d="M21 14c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10"
                  ></path>
                  <path d="M17 14a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></path>
                  <path
                    strokeLinecap="round"
                    d="M16 6h-4M9 6H8m-.766 8.362c.855.428 1.833 1.159 3.49 1.457c2.362.426 2.126-1.648 4.488-1.223c.72.13 1.206.35 1.55.585"
                  ></path>
                </g>
              </svg>
    )
}