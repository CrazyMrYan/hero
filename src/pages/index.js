/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Button, Grid, Box, Container } from '@material-ui/core';

function Home() {
  return (
    <Layout
      title="免费模板，Vuetify 模板，前端技巧和教程"
      description="免费获取可商用的 Vuetify 主题，以及前端技巧和教程">
      <Container maxWidth="xl">
        <Box my={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} style={{ alignSelf: 'center' }}>
              <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                免费获取可商用的 Vuetify 主题，以及前端技巧和教程
            </Box>
              <Box fontSize="h6.subtitle1" my={2}>
                使用 Vuetify 构建的可轻松定制的现代 Vue UI 模板和组件。
                所有组件都是模块化的，在所有设备和分辨率上都为响应式。
                品牌的颜色也完全可定制。免费供个人和商业使用。
            </Box>

              <Link to="docs/vuetify2-tricks/introduction">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  浏览教程
            </Button>
              </Link>

              <Link to="docs/vuetify2-tricks/introduction">
                <Button
                  color="primary"
                  size="large"
                >
                  查看主题
            </Button>
              </Link>

            </Grid>

            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={6}>
              <img src="https://wx1.sbimg.cn/2020/08/10/oerIR.png" alt="imnages" />
            </Grid>
          </Grid>
        </Box>

        <main>
          <Box my={12} />
        </main>
      </Container>
    </Layout>
  );
}

export default Home;
