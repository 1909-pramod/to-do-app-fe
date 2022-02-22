import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/common/Slider.module.scss';

interface Props {
  components: JSX.Element[]
}

const Slider: React.FC<Props> = ({ components }) => {

  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setWidth((carousel.current?.scrollWidth || 0) - (carousel.current?.offsetWidth || 0))
  }, [])

  return (
    <div className={styles['slider-container']}>
      <motion.div className={styles.carousel} ref={carousel}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className={styles['inner-carousel']}>
          {
            components.map((component, idx) => {
              return (
                <div key={idx}>
                  { component }
                </div>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
