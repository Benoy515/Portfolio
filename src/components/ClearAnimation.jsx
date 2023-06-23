import { motion } from "framer-motion"

export default function ClearAnimation(props) {
    // let styling = ""
    // if (props.status) {
    //     styling += "h-screen bg-white absolute right-56 w-full transition duration-300 ease-in-out "
    // } else {
    //     styling += "h-screen bg-white absolute right-56 w-0 transition duration-300 ease-in-out"
    // }
    let styling = "h-screen bg-white absolute right-0 w-full z-50"
    return (
        <motion.div 
        className={styling}
        animate={{
            width: ["0.001%", "100%", "200%", "100%"],
            x: ["0%", "0%", "0%", "-100%"],
          }}
        transition={{
            duration: 1.1,
            ease: "easeInOut",
            // type: "spring"
            // times: [0, 1, 1],
        }}
      />
    );
  }