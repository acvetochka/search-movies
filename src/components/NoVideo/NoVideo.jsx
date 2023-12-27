import { motion } from 'framer-motion';
import spiderman from '../../images/spiderman.webp';
import { Text, Wrapper } from './NoVideo.styled';

function NoVideo() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, x: 100, overflow: 'hidden' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.15 }}
        viewport={{ once: true }}
      >
        <Text>Enter a search query to explore movies.</Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0, overflow: 'hidden' }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{ duration: 1.15 }}
        viewport={{ once: true }}
        // , amount: 0.2
      >
        <img src={spiderman} alt="spiderman" width={500} />
      </motion.div>
    </Wrapper>
  );
}

export default NoVideo;
