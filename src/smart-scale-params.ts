/**
 * SmartScaleParams is a subset of AnimeJs' AnimeParams.
 * This means integration with AnimeJs is as simple as
 * using the object spread operator:
 *
 *  anime({
 *    targets: '.traveler',
 *    ...getSmartScaleParams(rect, scale, container)
 *  });
 *
 * however, none of these parameters are unique to AnimeJs, and
 * can still be useful on their own
 * 
 * ---
 *
 * translateX and translateY are in pixels
 * 
 * complete is an AnimeParam set by getSmartUnscaleParams to track animation completion
 */
export type SmartScaleParams = {
  translateX?: number;
  translateY?: number;
  scale?: number;
  complete?: { (): void };
};
