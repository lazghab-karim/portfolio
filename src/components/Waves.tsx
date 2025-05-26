import '../css/waves.css'
export const Waves = ({ fill1 = "#2d55aa",  fill2 = "#3461c1",fill3 = "#4579e2"}) => {

  return (
    <svg
        viewBox="0 0 2 1"
        preserveAspectRatio="none">
        <defs>
            <path id="w"
                d="
                m0 1v-.5 
                q.5.5 1 0
                t1 0 1 0 1 0
                v.5z" />
        </defs>
        <g>
            <use href="#w" y=".0" fill={fill1} />
            <use href="#w" y=".1" fill={fill2} />
            <use href="#w" y=".2" fill={fill3} />
        </g>
    </svg>

  )
}

export default Waves