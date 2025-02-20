'use strict';

import { TargetAndTransition } from 'framer-motion';

export interface IPositionState extends TargetAndTransition {
  top: number;
  width: number;
  opacity: number;
}
