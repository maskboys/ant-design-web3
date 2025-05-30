// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/mxc-circle-colorful.svg';

/**![MxcCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1teGMtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTM4IDEzOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTM4IDEzOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tbXhjLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1My43NzA0IiB5MT0iMTI0Ljc1ODQiIHgyPSI4NC43ODM3IiB5Mj0iMTAuOTg4MyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDEzNy44ODk4KSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwRjUxRkIiLz4KCTxzdG9wIG9mZnNldD0iMC40NDQ4IiBzdG9wLWNvbG9yPSIjNjMyNEZCIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFRjM2NzgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNpcmNsZSBjeD0iNjkiIGN5PSI2OSIgcj0iNjkiIGZpbGw9IiB1cmwoI2FudC13ZWIzLWljb24tbXhjLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8xXykiLz4KPHBhdGggZD0iTTg4LjIsNTIuNWMwLTAuNSwwLjItMS4xLDAuNy0xLjdjMC43LTAuOCwxLjUtMC45LDItMWg4LjNjMSwwLDEuOC0wLjgsMS44LTEuOHYtOS4yYzAtMS0wLjgtMS44LTEuOC0xLjhIOTAKCWMtMSwwLTEuOCwwLjgtMS44LDEuOFY0N2MwLDAuNS0wLjIsMS4yLTAuOCwxLjljLTAuNSwwLjYtMS4yLDAuOC0xLjcsMC45aC04LjVjLTEsMC0xLjgsMC44LTEuOCwxLjh2OC4yYzAsMC41LTAuMiwxLjItMC44LDEuOQoJYy0wLjUsMC42LTEuMiwwLjgtMS43LDAuOWgtNy44Yy0wLjUtMC4xLTEuMi0wLjMtMS43LTAuOWMtMC41LTAuNS0wLjctMS4xLTAuOC0xLjZ2LTguNWMwLTEtMC44LTEuOC0xLjgtMS44aC04LjUKCWMtMC41LTAuMS0xLjItMC4zLTEuNy0wLjljLTAuNS0wLjUtMC43LTEuMS0wLjgtMS42di04LjVjMC0xLTAuOC0xLjgtMS44LTEuOGgtOS4yYy0xLDAtMS44LDAuOC0xLjgsMS44VjQ4YzAsMSwwLjgsMS44LDEuOCwxLjhINDcKCWMwLjUsMCwxLjQsMC4yLDIsMWMwLjgsMC45LDAuNywyLjEsMC43LDIuM2wwLDB2Ni44YzAsMC41LTAuMiwxLjItMC44LDEuOWMtMC41LDAuNi0xLjIsMC44LTEuNywwLjloLTguNWMtMSwwLTEuOCwwLjgtMS44LDEuOAoJdjM0LjhjMCwxLDAuOCwxLjgsMS44LDEuOEg0OGMxLDAsMS44LTAuOCwxLjgtMS44di0zNGMwLTAuNSwwLjItMS4xLDAuNy0xLjdjMC43LTAuOCwxLjUtMC45LDItMWg3LjJjMC41LDAsMS40LDAuMiwyLDEKCWMwLjgsMC45LDAuNywyLjEsMC43LDIuM2wwLDB2Ny44YzAsMSwwLjgsMS44LDEuOCwxLjhoOS4yYzEsMCwxLjgtMC44LDEuOC0xLjh2LTguNGMwLTAuNSwwLjItMS4xLDAuNy0xLjdjMC43LTAuOCwxLjUtMC45LDItMWg3LjIKCWMwLjUsMCwxLjQsMC4yLDIsMWMwLjgsMC45LDAuNywyLjEsMC43LDIuM2wwLDB2MzMuNGMwLDEsMC44LDEuOCwxLjgsMS44aDkuMmMxLDAsMS44LTAuOCwxLjgtMS44VjY0LjRjMC0xLTAuOC0xLjgtMS44LTEuOGgtOC41CgljLTAuNS0wLjEtMS4yLTAuMy0xLjctMC45Yy0wLjUtMC41LTAuNy0xLjEtMC44LTEuNkw4OC4yLDUyLjVMODguMiw1Mi41eiIgZmlsbD0iICNGRkZGRkYiLz4KPC9zdmc+Cg==) */
export const MxcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-mxc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

MxcCircleColorful.displayName = 'MxcCircleColorful';
