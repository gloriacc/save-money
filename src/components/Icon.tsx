import React from 'react';
import classNames from 'classnames';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
}
try {
  importAll(require.context('icons', true, /\.svg$/))
} catch (e) {
  console.log(e);
}

type Props = {
  name: string
} & React.SVGAttributes<HTMLOrSVGElement>;

const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props;
  return (
    <svg className={classNames('icon', className)} {...rest}>
      <use xlinkHref={'#' + props.name}/>
    </svg>
  )
}
export default Icon;